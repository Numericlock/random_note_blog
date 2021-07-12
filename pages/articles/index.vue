<template>
<div class="">
    <h1>記事一覧</h1>
    <ul>
        <li v-for="(c, index) in content" :key="index">
            <nuxt-link :to="c.path">{{c.title}}</nuxt-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    async asyncData({ store, $content, params }) {
        const content = await $content('articles')
            .only(['title', 'path'])
            .sortBy('createdAt', 'desc')
            .skip(0).limit(15)
            .fetch();

        return {
            content,
        }
    }
}
</script>
