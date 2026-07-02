const attachClickEvent = ({ button, element }) => {
    button.addEventListener("click", event => {
        event.preventDefault();

        const form = element.closest("form");
        const data = form ? Object.fromEntries(
            [...form.querySelectorAll("input")]
                .map(input => [input.name, input.value])
        ) : {};

        element.onClick?.(data);
    });
};

export default attachClickEvent;
