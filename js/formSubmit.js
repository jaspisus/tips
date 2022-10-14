"use strict";
const getFormValues = (event) => {
    const data = new FormData(event.currentTarget);
    return Object.fromEntries(data.entries());
};
const handleSubmit = (event) => {
    event.preventDefault();
    const values = getFormValues(event);
    console.log("submitting", values);
};
