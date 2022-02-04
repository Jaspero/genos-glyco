<script>
    /**
     * member image
     * @type {string}
     */
    export let src = '/images/about/member-placeholder.png';

    /**
     * member image alt
     * @type {string}
     */
    export let alt = 'team member'

    /**
     * member name
     * @type {string}
     */
    export let name = 'Team Member Name';

    /**
     * member title
     * @type {string}
     */
    export let title = 'Team Member Title';
</script>

<div class="team-member">
    <div class="team-member-image">
        <img {src} {alt}>
    </div>
    <h6 class="team-member-name">{name}</h6>
    <p class="team-member-title">{title}</p>
</div>

<style>
    .team-member {

    }
    .team-member-image {
        width: 15rem;
        height: 15rem;
        background-color: #E5F2D9;
        border-radius: 50%;
        margin: 0 auto;
    }
    .team-member-image img {
        width: 15rem;
        height: 15rem;
    }
    .team-member-name {
        font-size: 1.1rem;
        width: 15rem;
        margin: 1rem auto 0 auto;
    }
    .team-member-title {
        width: 15rem;
        margin: 0 auto;
    }
</style>