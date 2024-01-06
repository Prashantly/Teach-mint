export const customStyles = {
    control: (provided) => ({
        ...provided,
        borderColor: "#555",
        width: "16rem",
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#000" : "#ccc",
        padding: "0.8em",
        backgroundColor: state.isSelected ? "#ffd700" : "#444",
        transition: "background-color 0.3s, color 0.3s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#555",
            color: "#fff",
        },
    }),
    singleValue: (p, state) => ({
        ...p,
        color: "#000",
    }),
};