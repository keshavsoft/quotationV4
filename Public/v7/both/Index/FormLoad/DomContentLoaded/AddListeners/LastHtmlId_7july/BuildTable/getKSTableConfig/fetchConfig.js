const fetchConfig = async () => {
    const response = await fetch("./Index/Configs/last/config.json");
    if (!response.ok) {
        throw new Error(`Failed to fetch last config: ${response.statusText}`);
    }
    return response.json();
};

export { fetchConfig };
