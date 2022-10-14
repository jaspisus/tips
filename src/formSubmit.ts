const getFormValues = (event: any) => {
    const data = new FormData(event.currentTarget);
    return Object.fromEntries(data.entries());
};

const handleSubmit = (event: any) => {
    event.preventDefault();
    const values = getFormValues(event);

    console.log("submitting", values);
};
