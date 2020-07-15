import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

export const newStoriesUrl = `${baseUrl}newstories.json`
export const topStoriesUrl = `${baseUrl}topstories.json`
export const jobStoriesUrl = `${baseUrl}jobstories.json`
export const showStoriesUrl = `${baseUrl}showstories.json`
export const storyUrl = `${baseUrl}item/`

export const getNewStoryIds = async () => {
    try {
        const { data } = await axios.get(newStoriesUrl)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getJobStoryIds = async () => {
    try {
        const { data } = await axios.get(jobStoriesUrl)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getTopStoryIds = async () => {
    try {
        const { data } = await axios.get(topStoriesUrl)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getShowStoryIds = async () => {
    try {
        const { data } = await axios.get(showStoriesUrl)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getStory = async storyId => {
    try {
        const { data: { id, title, by, url, time, descendants, score } } = await axios.get(`${storyUrl + storyId}.json`)
        return { id, title, by, url, time, descendants, score }
    } catch (error) {
        console.log(error)
    }
}

export const getSearchPosts = async query => {
    try {
      const {data: {hits}} = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`)
        return hits
    } catch (error) {
        console.log(error) 
    }
  }
