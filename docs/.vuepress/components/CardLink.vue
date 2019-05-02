<template>
  <div class="card">
    <a
      :href="`https://vuekansai.connpass.com/event/${connpassLinkID}`"
      target="_blank"
    >
      <img
        :src="`./${image}.png`"
        :alt="name"
      >
      <div class="card-text">
        <p>
          {{ name }}({{ date }})
        </p>
      </div>
    </a>
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
      required: true
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
}

img {
  width: 100%;
}

.card-text {
  position: absolute;
  bottom: 40px;
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
  font-size: 16px;
}

@media (max-width: 500px) {
  .card {
    width: calc(100% - 10px);
    margin: 5px;
  }

  .card-text {
    bottom: 80px;
  }
}
</style>
