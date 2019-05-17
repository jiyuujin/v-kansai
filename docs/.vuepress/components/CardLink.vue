<template>
  <div class="card">
    <div v-if="connpassLinkID">
      <a
        :href="`https://vuekansai.connpass.com/event/${connpassLinkID}`"
        target="_blank"
      >
        <img
          :src="`./${image}.png`"
          :alt="name"
        >
        <div class="date-text">
          {{ date }}
        </div>
        <div class="card-text">
          <p>
            {{ name }}
          </p>
        </div>
      </a>
    </div>
    <div v-else>
      <img
        :src="`./${image}.png`"
        :alt="name"
      >
      <div class="date-text">
        {{ date }}
      </div>
      <div class="card-text">
        <p>
          {{ name }}
        </p>
      </div>
      <div class="pre-open-text">
        開催準備中！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    connpassLinkID: {
      type: String,
      // 開催決定かつプレオープンの場合が存在するため
      required: false
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  width: calc(33.3% - 24px);
  margin: 8px;
  border: inset 2px #35495e;
}

img {
  width: 100%;
}

.date-text {
  position: absolute;
  top: 0;
  right: 0;
}

.card-text {
  position: absolute;
  bottom: calc(50% - 2.4em);
  color: #fff;
  background: rgba(0,0,0,.6);
  width: 100%;
  max-width: 600px;
  padding: 1em 0;
}

.card-text p {
  margin: 0;
  padding: 0 0.8em;
  text-align: center;
  font-size: 24px;
}

.pre-open-text {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media (max-width: 500px) {
  .card {
    width: calc(100% - 10px);
    margin: 5px;
  }

  .card-text {
    bottom: calc(50% - 2.4em);
  }
}
</style>
