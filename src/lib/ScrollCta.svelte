<script>
    /**
     *
     * @type {string}
     */
    export let href = undefined;
</script>

<div class="cta">
    <img class="cta-arrows" src="/images/arrows-down.svg" alt="">
    <a class="cta-link" {href}>Scroll to learn more</a>
    <img class="cta-arrows" src="/images/arrows-down.svg" alt="">
</div>

<style>
    .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .cta-link {
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        margin: 0 1rem;
        color: #175E82;
        font-size: 1.75rem;
        cursor: pointer;
    }
    .cta-link::before, .cta-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0;
        height: 4px;
        background-color: #178282;
        transition: .35s;
    }
    .cta-link::before {
        right: 50%;
    }
    .cta-link::after {
        left: 50%;
    }
    .cta-link:hover::before, .cta-link:hover::after {
        width: 50%;
    }

    @media (max-width: 600px) {
        .cta-link {
            font-size: 1.25rem;
        }
        .cta-arrows {
            height: 1rem;
        }
    }
</style>