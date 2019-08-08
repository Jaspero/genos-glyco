export function lazyLoad(node, data) {
    setTimeout(() => {
        const img = new Image();
        img.src = data.src;
        img.onload = () => {
            node.setAttribute('src', data.src);
        };
    }, 2000);
}
