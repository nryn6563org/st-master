/*
    JavaScript AutoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-AutoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/

const AutoComplete = (function () {
  // "use strict";
  function AutoComplete(options) {
    if (!document.querySelector) { return }

    // helpers
    function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className)
    }

    function addEvent(el, type, handler) {
      if (el.attachEvent) { el.attachEvent('on' + type, handler) } else { el.addEventListener(type, handler) }
    }
    function removeEvent(el, type, handler) {
      // if (el.removeEventListener) not working in IE11
      if (el.detachEvent) { el.detachEvent('on' + type, handler) } else { el.removeEventListener(type, handler) }
    }
    function live(elClass, event, cb, context) {
      addEvent(context || document, event, function (e) {
        let found
        let el = e.target || e.srcElement
        while (el && !(found = hasClass(el, elClass))) { el = el.parentElement }
        if (found) { cb.call(el, e) }
      })
    }

    const o = {
      selector: 0,
      source: 0,
      minChars: 20,
      delay: 150,
      offsetLeft: 0,
      offsetTop: 1,
      cache: 20000,
      menuClass: '',
      renderItem: function (item, search) {
        // escape special characters
        search = search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
        const re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi')
        return '<div class="AutoComplete-suggestion" data-val="' + item + '">' + item.replace(re, '<b>$1</b>') + '</div>'
      },
      onSelect: function (e, term, item) {}
    }
    for (const k in options) {
      if (options.prototype.hasOwnProperty.call(options, k)) { o[k] = options[k] }
    }

    // init
    const elems = typeof o.selector === 'object' ? [o.selector] : document.querySelectorAll(o.selector)
    for (let i = 0; i < elems.length; i++) {
      const that = elems[i]

      // create suggestions container "sc"
      that.sc = document.createElement('div')
      that.sc.className = 'AutoComplete-suggestions ' + o.menuClass

      that.AutoCompleteAttr = that.getAttribute('AutoComplete')
      that.setAttribute('AutoComplete', 'off')
      that.cache = {}
      that.last_val = ''

      that.updateSC = function (resize, next) {
        const rect = that.getBoundingClientRect()
        that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px'
        that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px'
        that.sc.style.width = Math.round(rect.right - rect.left) + 'px' // outerWidth
        if (!resize) {
          that.sc.style.display = 'block'
          if (!that.sc.maxHeight) {
            that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight)
          }
          if (!that.sc.suggestionHeight) { that.sc.suggestionHeight = that.sc.querySelector('.AutoComplete-suggestion').offsetHeight }
          if (that.sc.suggestionHeight) {
            if (!next) { that.sc.scrollTop = 0 } else {
              const scrTop = that.sc.scrollTop
              const selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top
              if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0) { that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight } else if (selTop < 0) { that.sc.scrollTop = selTop + scrTop }
            }
          }
        }
      }
      addEvent(window, 'resize', that.updateSC)
      document.body.appendChild(that.sc)

      live(
        'AutoComplete-suggestion',
        'mouseleave',
        function (e) {
          const sel = that.sc.querySelector('.AutoComplete-suggestion.selected')
          if (sel) {
            setTimeout(function () {
              sel.className = sel.className.replace('selected', '')
            }, 20)
          }
        },
        that.sc
      )

      live(
        'AutoComplete-suggestion',
        'mouseover',
        function (e) {
          const sel = that.sc.querySelector('.AutoComplete-suggestion.selected')
          if (sel) { sel.className = sel.className.replace('selected', '') }
          this.className += ' selected'
        },
        that.sc
      )

      live(
        'AutoComplete-suggestion',
        'mousedown',
        function (e) {
          if (hasClass(this, 'AutoComplete-suggestion')) {
            // else outside click
            const v = this.getAttribute('data-val')
            that.value = v
            o.onSelect(e, v, this)
            that.sc.style.display = 'none'
          }
        },
        that.sc
      )

      that.blurHandler = function () {
        let overSb
        try {
          overSb = document.querySelector('.AutoComplete-suggestions:hover')
        } catch (e) {
          overSb = 0
        }
        if (!overSb) {
          that.last_val = that.value
          that.sc.style.display = 'none'
          setTimeout(function () {
            that.sc.style.display = 'none'
          }, 350) // hide suggestions on fast input
        } else if (that !== document.activeElement) {
          setTimeout(function () {
            that.focus()
          }, 20)
        }
      }
      addEvent(that, 'blur', that.blurHandler)

      const suggest = function (data) {
        const val = that.value
        that.cache[val] = data
        if (data.length && val.length >= o.minChars) {
          let s = ''
          for (let i = 0; i < data.length; i++) { s += o.renderItem(data[i], val) }
          that.sc.innerHTML = s
          that.updateSC(0)
        } else { that.sc.style.display = 'none' }
      }

      that.keydownHandler = function (e) {
        const key = window.event ? e.keyCode : e.which
        // down (40), up (38)
        if ((key === 40 || key === 38) && that.sc.innerHTML) {
          let next
          const sel = that.sc.querySelector('.AutoComplete-suggestion.selected')
          if (!sel) {
            next = key === 40 ? that.sc.querySelector('.AutoComplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1] // first : last
            next.className += ' selected'
            that.value = next.getAttribute('data-val')
          } else {
            next = key === 40 ? sel.nextSibling : sel.previousSibling
            if (next) {
              sel.className = sel.className.replace('selected', '')
              next.className += ' selected'
              that.value = next.getAttribute('data-val')
            } else {
              sel.className = sel.className.replace('selected', '')
              that.value = that.last_val
              next = 0
            }
          }
          that.updateSC(0, next)
          return false
        } else if (key === 27) {
          that.value = that.last_val
          that.sc.style.display = 'none'
        } else if (key === 13 || key === 9) {
          const sel = that.sc.querySelector('.AutoComplete-suggestion.selected')
          if (sel && that.sc.style.display !== 'none') {
            o.onSelect(e, sel.getAttribute('data-val'), sel)
            setTimeout(function () {
              that.sc.style.display = 'none'
            }, 20)
          }
        }
      }
      addEvent(that, 'keydown', that.keydownHandler)

      that.keyupHandler = function (e) {
        const key = window.event ? e.keyCode : e.which
        if (!key || ((key < 35 || key > 40) && key !== 13 && key !== 27)) {
          const val = that.value
          if (val.length >= o.minChars) {
            if (val !== that.last_val) {
              that.last_val = val
              clearTimeout(that.timer)
              if (o.cache) {
                if (val in that.cache) {
                  suggest(that.cache[val])
                  return
                }
                // no requests if previous suggestions were empty
                for (let i = 1; i < val.length - o.minChars; i++) {
                  const part = val.slice(0, val.length - i)
                  if (part in that.cache && !that.cache[part].length) {
                    suggest([])
                    return
                  }
                }
              }
              that.timer = setTimeout(function () {
                o.source(val, suggest)
              }, o.delay)
            }
          } else {
            that.last_val = val
            that.sc.style.display = 'none'
          }
        }
      }
      addEvent(that, 'keyup', that.keyupHandler)

      that.focusHandler = function (e) {
        that.last_val = '\n'
        that.keyupHandler(e)
      }
      if (!o.minChars) { addEvent(that, 'focus', that.focusHandler) }
    }

    // public destroy method
    this.destroy = function () {
      for (let i = 0; i < elems.length; i++) {
        let that = elems[i]
        removeEvent(window, 'resize', that.updateSC)
        removeEvent(that, 'blur', that.blurHandler)
        removeEvent(that, 'focus', that.focusHandler)
        removeEvent(that, 'keydown', that.keydownHandler)
        removeEvent(that, 'keyup', that.keyupHandler)
        if (that.AutoCompleteAttr) { that.setAttribute('AutoComplete', that.AutoCompleteAttr) } else { that.removeAttribute('AutoComplete') }
        document.body.removeChild(that.sc)
        that = null
      }
    }
  }
  return AutoComplete
})();

(function () {
  if (typeof window.AutoComplete === 'function' && window.AutoComplete.amd) {
    window.AutoComplete('AutoComplete', function () {
      return AutoComplete
    })
  } else if (typeof module !== 'undefined' && module.exports) { module.exports = AutoComplete } else { window.AutoComplete = AutoComplete }
})()
