<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route:  'sobre' ,
      color: "success",
      label: "Read more",
    }),
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          :alt="title"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <router-link :to="{name : action.route}" class="text-dark font-weight-bold">{{
          title
        }}</router-link>
      </h5>
      <p>
        {{ description }}
      </p>
      <router-link
        :to="{name :action.route}"
        class="text-sm icon-move-right"
        :class="`text-${action.color}`"
        >{{ action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </router-link>
    </div>
  </div>
</template>
