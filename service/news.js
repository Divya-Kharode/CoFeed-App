import { articles_url, _api_key, country_code } from '../config/rest_config';

export async function getArticles(category='health') {

    try {
        let articles = await fetch("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1XXXXXXXXXXXX6");

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}
