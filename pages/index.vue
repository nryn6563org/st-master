<template>
  <div id="container">
    <MyItemSignal></MyItemSignal>
    <LatestSignalItem></LatestSignalItem>
    <MorePeopleItem></MorePeopleItem>
  </div>
</template>

<script>
import MyItemSignal from '~/components/main/MyItemSignal'
import LatestSignalItem from '~/components/main/LatestSignalItem'
import MorePeopleItem from '~/components/main/MorePeopleItem'
export default {
  components: {
    MyItemSignal,
    LatestSignalItem,
    MorePeopleItem
  },
  layout: 'defaultLayout'
}
</script>
