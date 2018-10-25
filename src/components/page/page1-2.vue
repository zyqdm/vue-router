<template>
  <div id="page1-2">
    <ul class="left">
  		<li class="left-li1" v-for='item in routes'>
  			<div v-for='(child,index) in item.children' :key='index'>
  				<router-link v-for='(child1,index1) in child.children' :key='index1' :to="{path:item.path+''+child.path+'/'+child1.path}">
  					{{child1.alias}}
  				</router-link>		
  			</div>
  		</li>
  	</ul>
  	<section class="content">
  		<router-view></router-view>
  	</section>
  </div>
</template>

<script>
export default {
  name: 'page1-2',
  data(){
  	return{
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style>
#page1-2 {
	width:100%;
	height: 50%;
	display: flex;
}
.left{
	width:300px;
	height: 100%;
	background-color: red;
}
.left-li1{
	list-style: none;
	width: 100%;
	height: 100px;
}
.left-li1 a{
	display: block;
	text-decoration: none;
	width:100%;
	height: 50px;
	font:bold 20px/50px;
	text-align: center;
	background-color: pink;
}
.left-li1 a:hover{
	background-color: hotpink;
}
.content{
	height: 100%;
	flex: 1;
	background-color: red;
}
</style>
