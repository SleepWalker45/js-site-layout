import { 
    createElement,
    createHeader 
} from "../../script/layout";

const page = document.querySelector('.page');

const divClass = createElement('div', 'card')
page.append(divClass)

const divHome = createElement('div', 'card')
page.append(divHome)

const header = createHeader();
const clonedHeader = header.cloneNode(true);

divClass.append(header)
divHome.append(clonedHeader)

const title = createElement('h1', 'title', 'Мой блог');
const homeTitle = createElement('h1', 'title', 'Комьюнити');

divClass.append(title);
divHome.append(homeTitle)

const POST_LIST = [
    {
        category: [
            { text: 'Важно', id: 1},
            { text: 'Новое', id: 2},
        ],
        info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
        date: '25.01',
        viewed: false,
    },
    {
        category: [
            { text: 'Новое', id: 2},
        ],
        info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
        date: '24.01',
        viewed: true,
    }
]

const createPost = () => {
    const postList = createElement('main', 'post__list');

    POST_LIST.forEach((postData) => {
        const post = createElement(
            'div',
            postData.viewed
            ? 'post button post--viewed'
            : 'post button'
        )

        const postHeader = createElement('div', 'post__header');

        const categoryList = createElement('div', 'post__category-list')

        postData.category.forEach((category) => {
            const categorySpan = createElement(
                'span',
                `post__category post__category--${category.id}`,
                category.text,
            )

            categoryList.append(categorySpan);
        })

        const dateSpan = createElement(
            'span',
            'post__date',
            postData.date,
        )
        postHeader.append(categoryList, dateSpan)

        const infoParagraph = createElement(
            'p',
            'post__info',
            postData.info,
        )
        post.append(postHeader, infoParagraph)

        postList.append(post)
    });

    return postList

}

const post = createPost()
divClass.append(post)

// Create homeWork nav

const NAV_BAR = [
    {
        text: 'База знаний',
        selected: false
    },
    {
        text: 'Информация',
        selected: true
    }
]

const createNav = () => {
    const navField = createElement('div', 'nav')

    NAV_BAR.forEach((item) => {
        const navItem = createElement(
            'div',
            item.selected 
            ? 'navItem navItem--selected'
            : 'navItem',
            item.text)
        
        navField.append(navItem)

    })

    return navField
}

const nav = createNav()

divHome.append(nav)

// ===

// Create homeWork img

const createImg = () => {
    const img = createElement('img', 'image')

    img['src'] = '/img/image1.png'

    return img;
}

const img = createImg();
divHome.append(img)

// ===

// Create homeWork content

const createContent = () => {
    const content = createElement('div', 'content')

    const title = createElement(
        'h1',
        'contentTitle',
        'Що таке база знань?'
    )

    const description = createElement(
        'p',
        'contentDescription',
        `База знаний — база данных, содержащая правила вывода и информацию о
        человеческом опыте и знаниях в некоторой предметной области. В самообучающихся
         системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.`
    )

    content.append(title);
    content.append(description)

    return content;
}

const content = createContent()
divHome.append(content)

// ===

// Create homeWork button

const createButton = () => {
    const button = createElement('button', 'homeButton')

    const link = createElement('a', 'buttonLink', `Перейти до ком'юніті у Телеграм`)

    button.append(link)

    return button;
}

const button = createButton();
divHome.append(button);
