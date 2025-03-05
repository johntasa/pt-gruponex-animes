import { gql } from '@apollo/client';

export const GET_ANIMES = gql`
  query GetAnimes($search: String, $genreIn: [String], $seasonYear: Int, $status: MediaStatus) {
    Page(page: 1, perPage: 6) {
      media(
        search: $search
        genre_in: $genreIn
        seasonYear: $seasonYear
        status: $status
        type: ANIME
        isAdult: false
      ) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        description
        episodes
        averageScore
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        trailer {
          id
          site
        }
      }
    }
  }
`;