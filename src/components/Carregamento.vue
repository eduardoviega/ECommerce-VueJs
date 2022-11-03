<template>
    <div id="preloader">
      <div class="inner">
        <img src="../../public/loading.gif">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #preloader {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#202329;
}
#preloader .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>