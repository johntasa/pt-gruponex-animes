import { gql } from '@apollo/client';

export const GET_TOP_ANIMES = gql`
  query getTopAnimes($season: MediaSeason, $seasonYear: Int) {
    season: Page(page: 1, perPage: 6) {
      media(
        season: $season
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    popular: Page(page: 1, perPage: 6) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
  fragment media on Media {
    id
    bannerImage
    coverImage {
      large
    }
    title {
      english
      native
    }
    description
    episodes
    averageScore
    status(version: 2)
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
`;

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