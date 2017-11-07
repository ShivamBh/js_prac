<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large router to="/meetup/new" class="primary">Organize Meetups</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12>
				<v-carousel style="cursor:pointer;">
					<v-carousel-item
						v-for="meetup in meetups"
						:src="meetup.imageUrl"
						:key="meetup.id"
						@click="onLoadMeetup(meetup.id)">
							<div class="title">
								{{ meetup.title }}
							</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12 class="text-xs-center">
				<p>Join The Communist Movement!</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				meetups: [
					{imageUrl: 'https://cdn.tutsplus.com/vector/uploads/legacy/articles/inspir_20_vector_flickr_groups/vector_art_2.jpg', id: 'asdfgaghasdf33', title: 'What up !'},
					{imageUrl: 'https://i.pinimg.com/564x/28/13/e2/2813e2d7581a3aaaef2b9d7f370c7fa1--ninja-girl-japanese-warrior.jpg', id: 'asdfgasdasdasdf33', title: 'Hello peeps!'},
					{imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/139/749/non_2x/bamboo-artwork-free-vector.jpg', id: 'sdfgshjsergdf', title: 'Ki laage!'}
				]
			}
		},
		methods: {
			onLoadMeetup(id) {
				this.$router.push('/meetups/' + id)
			}
		}
	}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		font-family: 'Helvetica', 'sans-serif';
		font-weight: 700;
		color: #F0F0F0;
		background-color: #4C4C4C;
		padding: 20px;
		opacity: 0.75;
	}
</style>