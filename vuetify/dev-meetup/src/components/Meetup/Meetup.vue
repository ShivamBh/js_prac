<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-card>
					<v-card-title>
						<h5 class="primary--text mb-0">{{ meetup.title }}</h5>
					</v-card-title>
					<v-card-media
						:src="meetup.imageUrl"
						height="400px"
					>
					</v-card-media>
					<v-card-text>
						<div class="info--text">{{meetup.date | date}} , {{ meetup.location }}</div>
						<div>{{ meetup.description }}</div>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="primary">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			meetup() {
				return this.$store.getters.loadedMeetup(this.id)
			}
		}
	}
</script>