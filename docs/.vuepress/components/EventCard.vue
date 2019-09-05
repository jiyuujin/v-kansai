<template>
  <div class="events">
    <div
        v-for="event in events"
        :key="event.id"
        class="event-card"
    >
      <div class="event-card-content">
        <div class="title">
          v-kansai #{{ event.id }}
        </div>
        <div class="description">
          {{ formatDate(event.created_at) }}
        </div>
      </div>
      <div class="event-card-link">
        <a
            :href="event.url"
            rel="noopener"
            target="_blank"
        >
          Go to Page!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { Events } from '../events'

dayjs.locale('ja')

export default {
  computed: {
    events() {
      // 降順
      return Events.sort((a, b) => {
        if (a.created_at > b.created_at) return -1
        if (a.created_at < b.created_at) return 1
        return 0
      })
    }
  },
  methods: {
    formatDate(d) {
      return dayjs(d).format('YYYY年 MM月 DD日 dddd')
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
}

.event-card {
  margin: 30px auto;
  width: 240px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}

.event-card-content {
  padding: 20px;
}

.event-card-content .title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  overflow: hidden;
  height: 5.4em;
  line-height: 1.8;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  vertical-align: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.event-card-content .description {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

.event-card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}

.event-card-link a {
  text-decoration: none;
  color: #42b883;
  margin: 0 10px;
}

.event-card-link a:hover {
  color: #42b883;
}
</style>
