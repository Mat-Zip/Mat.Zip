<template>
    <div class="footer">
        <div>
            <a href="https://github.com/Mat-Zip/Mat.Zip" target="_blank">
                <span>Mat.Zip</span>
                <img src="@/assets/github-logo.png" width="18px" height="18px" />
            </a>
            <span> Contact: iwytbbtss00@naver.com</span>
        </div>
        <div>
            <span>Members:</span>
            <span v-for="(member, i) in members" :key="i">
            <span> {{ member.name }}</span>
                <a :href="member.github" target="_blank"><img src="@/assets/github-logo.png" width="18px" height="18px" /></a>
                <a :href="member.instagram" target="_blank"><img src="@/assets/instagram-logo.png" width="18px" height="18px" /> </a>
            </span>
        </div>
        <span>Copyright 2022. Mat.Zip Co. all rights reserved.</span>
    </div>
</template>

<script>
export default {
    data() {
        return ({
            members: [
                {name: "우재윤", github: "https://github.com/iwytbbtss", instagram: "https://www.instagram.com/wo_ojy"},
                {name: "김준용", github: "https://github.com/djdj4275", instagram: "https://www.instagram.com/jun_aay"},
                {name: "구자경", github: "https://github.com/koqun", instagram: "https://www.instagram.com/rnwkrud_"}
            ]
        })
    }
}
</script>

<style scoped>
    .footer {
        width: 80vw;
        height: 110px;
        text-align: center;
        margin: auto;
        line-height: 30px;
        margin-top: 30px;
        font-size: 14px;
        word-spacing: 3px;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        transform: translateY(3.75px);
        margin: 0 0 0 2px;
    }
</style>