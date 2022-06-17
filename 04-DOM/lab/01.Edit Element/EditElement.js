function editElement(ref, match, replacer) {

    const text = ref.textContent;
    const pattern = new RegExp(match, 'g');
    const result = text.replace(pattern, replacer);
    ref.textContent = result;

}  