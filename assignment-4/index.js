let movies = {};
let all_categories = new Set();
let visible_categories = new Set();

function update_visible_movies() {
    for (movie in movies) {
        if (!movies[movie].categories.isSupersetOf(visible_categories)) {
            movies[movie].element.classList.add("hidden");
        } else {
            movies[movie].element.classList.remove("hidden");
        }
    }
}

function add_category(category) {
    const category_list = document.getElementById("category-list");

    const category_entry = document.createElement("li");
    category_entry.classList.add("collection-item");

    const checkbox_container = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", event => {
        if (checkbox.checked) {
            visible_categories.add(category);
        } else {
            visible_categories.delete(category);
        }

        update_visible_movies();
    });

    const checkbox_label = document.createElement("span");
    checkbox_label.textContent = category;

    category_entry.appendChild(checkbox_container);
    checkbox_container.appendChild(checkbox);
    checkbox_container.appendChild(checkbox_label);

    category_list.appendChild(category_entry);

    all_categories.add(category);
}

document.addEventListener("DOMContentLoaded", () => {
    const movie_name = document.getElementById("movie-name");
    const movie_categories = document.getElementById("movie-categories");
    const movie_list = document.getElementById("movie-list");

    document.getElementById("input-form").addEventListener("submit", event => {
        event.preventDefault();

        const title = movie_name.value.trim();
        if (title === "") {
            alert("No movie title was provided");
            return;
        }

        let categories;
        if (movie_categories.value.trim() === "") {
            categories = [];
        } else {
            categories = movie_categories.value.split(",").map(s => s.trim());
        }

        if (movies[title] !== undefined) {
            alert("A movie with that title already exists");
            return;
        }

        const entry = document.createElement("li");
        entry.classList.add("collection-item");

        const label = document.createElement("span");
        label.classList.add("title");
        label.textContent = `${title}${categories.length !== 0 ? " (" + categories.join(", ") + ")" : ""}`;

        const delete_button = document.createElement("i");
        delete_button.classList.add("material-icons", "remove-btn");
        delete_button.textContent = "delete";
        delete_button.addEventListener("click", () => {
            entry.remove();
            delete movies[title];
        });

        entry.appendChild(label);
        entry.appendChild(delete_button);

        movies[title] = {
            element: entry,
            categories: new Set(categories),
        };

        for (category of categories) {
            if (!all_categories.has(category)) {
                add_category(category);
            }
        }

        update_visible_movies();
        movie_list.appendChild(entry);

        movie_name.value = "";
        movie_categories.value = "";
    });
});
