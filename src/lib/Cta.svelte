<script>
    /**
     *
     * @type {string}
     */
    export let href = undefined;

    /**
     *
     * @type {'blue' | 'green'}
     */
    export let color = 'blue';
</script>

<div class="cta">
    <img class="cta-arrows" src="/images/shared/arrows-{color}.svg" alt="">
    <a class="cta-link {color}" {href} target="_blank">
        <slot></slot>
    </a>
    <img class="cta-arrows" src="/images/shared/arrows-{color}.svg" alt="">
</div>

<style>
    .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .cta-arrows {
        height: 2.5rem;
    }
    .cta-link {
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        margin: 0 1rem;
        color: #175E82;
        font-size: 3rem;
        cursor: pointer;
    }
    .cta-link.blue {
        color: #175E82;
    }
    .cta-link.blue::before, .cta-link.blue::after {
        background-color: #175E82;
    }
    .cta-link.green {
        color: #4C8217;
    }
    .cta-link.green::before, .cta-link.green::after {
        background-color: #4C8217;
    }
    .cta-link::before, .cta-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0;
        height: 4px;
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
    .cta-arrows:first-of-type {
        transform: scaleX(-1);
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