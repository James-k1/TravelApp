<script>
    import sourceData from '@/data.json'
    import ExperienceCard from "@/components/ExperienceCard.vue"
import router from '@/router';
import GoBack from "@/components/GoBack.vue"
    export default {
        components: {ExperienceCard, router, GoBack },
        props: {
            id: {type: Number, required: true}
        },
        computed:{
            destination(){
                return sourceData.destinations.find(destination => this.id===destination.id)
            }
        },


    }
</script>


<template>
    <div>
        <GoBack/>
        <section v-if="destination" class="destination">
            <h2>{{destination.name}}</h2>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name">
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link v-for="experience in destination.experiences" :key="experience.slug" :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}">
                    <ExperienceCard :experience="experience"/>
                </router-link>
            </div>
            <router-view/>
        </section>
    </div>
</template>
