<template>
  <div>
    <img 
      class="photoGallery-image clickable"
      :class="RoundedClass"
      :src="imagedetails.imageSrc"
      @click="zoomImage($event)"
    >

    <div 
      class="zoomedBg hidden"
      @click="hidebg($event)"
    >
      <img
        :src="imagedetails.imageSrc"
        alt="zoomed"
        class="zoomedImage"
      >
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line vue/require-prop-types
const imagedetails = defineProps(['imageSrc', 'rounded'])


let RoundedClass = 'rounded-lg'


if (imagedetails.rounded != "true") {
  RoundedClass = ''
} 

const zoomImage = (e) => {
	if ( e.target.parentElement.lastChild.classList == 'zoomedBg hidden') {
        e.target.parentElement.lastChild.classList.remove('hidden')
      }
}

const hidebg = (e) => {
	if (e.target.classList == "zoomedBg") {
		e.target.classList.add('hidden')
	}

}
</script>

<style>
.rounded-lg{
	border-radius: 0.5rem; 
}
.photoGallery-image{
	max-width: 100%; 
	height: 100%;
	object-fit: cover; 
}

.zoomedBg{
	z-index: 1000;
	display: flex; 
	position: fixed; 
	background-color: #00000057; 
	top: 0; 
	left: 0;  
	justify-content: center; 
	align-items: center; 
	width: 100vw; 
	height: 100vh; 
}
.hidden{
	display: none;
}

.zoomedImage{
	height: 80vh;
	max-height: 80vh;
	width: auto;
	object-fit: cover; 
}
</style>