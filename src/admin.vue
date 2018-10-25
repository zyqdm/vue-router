<template>
  <div id="admin">
  	<ul class="left">
  		<li class="left-li" v-for='item in routes'>
  			<router-link v-for='(child,index) in item.children' :key='index' :to="{path:item.path+''+child.path}">
  				{{child.alias}}
  			</router-link>
  		</li>
  	</ul>
  	<section class="content">
  		<router-view></router-view>
  	</section>
  </div>
</template>
<script>
export default {
  name: 'admin',
  data(){
  	return {
		routes:this.$router.options.routes
  	}
  
  }
}
</script>

<style>
#admin {
	width: 100%;
	height: 100%;
	background-color: #ccc;
	display: flex;
}
.left{
	width:300px;
	height: 100%;
	background-color: #fff;
}
.left-li{
	list-style: none;
	width: 100%;
	height: 100px;
}
a{
	display: block;
	text-decoration: none;
	width:100%;
	height: 50px;
	font:bold 20px/50px;
	text-align: center;
	background-color: skyblue;
}
a:hover{
	background-color: blue;
}
.content{
	height: 100%;
	flex: 1;
	background-color: red;
}
</style>
