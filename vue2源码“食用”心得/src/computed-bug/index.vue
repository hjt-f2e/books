<template>
	<view class="content">
		<view class="search-box">
			<input type="text" v-model="keyword">
			<text class="button" v-if="keyword" @click="submit">搜索</text>
			<text class="button" v-else @click="clear">取消</text>
		</view>
		<view class="list" v-for="(item, index) in lists" :key="index">
			<text class="name">{{ item.name }}</text>
			<text class="age">{{ item.age }}</text>
		</view>
		<view class="footer" v-if="isShowFooter">{{ footerText }}</view>
	</view>
</template>

<script>
	// 例子：computed 属性的一个 “ BUG ”
	import Vue from 'vue';
	
	let hasShow = true;
	export default Vue.extend({
		data: () => ({
			keyword: '',
			lists: [
				{
					name: '小明',
					age: 20
				},
				{
					name: '小邓',
					age: 21
				},
				{
					name: '小黄',
					age: 22
				}
			],
			footerText: '欢聚堂技术支持'
		}),

		computed: {
			isShowFooter() {
				console.log('isShowFooter function');
				if (!hasShow) return false;

				return this.keyword === '';
			}
		},

		methods: {
			submit() {
				hasShow = false;
			},
			clear() {
				hasShow = true;
				this.keyword = '';
			}
		}
	});
</script>

<style>
	.search-box {
		margin: 20px 0;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;

		display: flex;
		justify-content: space-between;
	}
	.search-box input {
		flex: 1;
		height: 40px;
		border: 1px solid #ccc;
	}

	.search-box .button {
		width: 60px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		background: #007fff;
		color: #fff;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		line-height: 1.4;
		background: rgb(248, 248, 248);
		color: rgb(0, 0, 0);
		height: 44px;
    	padding: 7px 3px;
	    font-size: 18.75px;
		text-align: center;
		box-sizing: border-box;
	}
	.list {
		border-bottom: 1px solid #ccc;
		line-height: 40px;
		padding: 0 20px;
		font-size: 14px;
		box-sizing: border-box;
		color: #333;
	}
</style>
