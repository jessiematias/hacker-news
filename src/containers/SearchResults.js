import React, { useState, useEffect } from 'react'
import { getSearchPosts } from '../services/hnApi'
import { StoriesContainer, StoryContainer,Points } from '../styles/StoryStyles'
import { SearchField } from '../styles/SearchStyles'
import { formatDate } from '../mappers/formatDate'


export default function SearchResults() {
    const [query, setQuery] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        getSearchPosts(searchField).then(data => setQuery(data))
    }, [searchField])

    return (
        <>
        <SearchField>
            <h2>Search</h2>
                <input onChange={e => setSearchField(e.target.value)} value={searchField} type="search"/>
            </SearchField>
            {searchField ? query.map(q => q.url ?
                <StoriesContainer key={q.created_at_i}>
                    <Points>{q.points}</Points>
                    <StoryContainer>
                    <h3>
                        <a rel="noopener noreferrer" target="_blank" href={q.url}>{q.title}</a>
                    </h3>
                    <span>by: {q.author} </span>
                    <span>{formatDate(q.created_at)}</span>
                    <span> | {q.num_comments === 1 ? `${q.num_comments} comment` : `${q.num_comments} comments`}</span>
                    </StoryContainer>
                </StoriesContainer>
                : null) : null}
        </>
    )
}
