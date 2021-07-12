<template>
<article>
    <nuxt-content :document="content" />
</article>
</template>

<script>
export default {
    async asyncData({ $content, params, redirect }) {
        const content = await $content('articles').where({ path: "/articles/" + params.slug }).fetch();
        if (content.length > 0) {
            return {
                content: content[0],
            }
        } else {
            redirect('/articles')
        }
    }
}
</script>
