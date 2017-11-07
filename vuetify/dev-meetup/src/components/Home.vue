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
		computed: {
			meetups() {
				return this.$store.getters.featuredMeetups
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