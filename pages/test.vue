<template>
    <div>
        {{content}}
    </div>
</template>
<script>
export default{
    name:'test_page',
    async asyncData({ store,$content, params }) {
        const content = await $content('articles').fetch();

        return {
            content,
        }
    },
}
</script>
