<template>
  <div 
    class="nuxt-gallery"
    :class="rowNumbersClass"
  >
    <slot />
  </div>
</template>

<script setup>

// eslint-disable-next-line vue/require-prop-types
const photoGalleryRows = defineProps(['rows'])

console.log(photoGalleryRows.rows)

const rowNumbersClass = `lg:grid-cols-${photoGalleryRows.rows}`



</script>

<style>
.nuxt-gallery{
  display: grid ;
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 1rem; 
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px) { 
  .nuxt-gallery{
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
}

@media (min-width: 768px) { 
  .nuxt-gallery{
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
}

</style>
