<template>
  <div>
    <p>{{ $store.getters.getPlaces[$route.params.id] }}</p>
  </div>
</template>