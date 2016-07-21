import {expect} from 'chai';
import reducer, * as fromReducer from '../src/redux/albums.reducer';

const state = [
    {id: 'album02', title: 'album 02', addedAt: '2016-06-27T12:01:59.361Z'},
    {id: 'album01', title: 'album 01', addedAt: '2016-06-27T12:05:00.123Z'},
    {id: 'album03', title: 'album 03', addedAt: '2016-06-27T12:02:55.658Z'},
]

describe('Albums Reducer', () => {
    it('sets albums', () => {
        const action = {
            type: 'SET_ALBUMS',
            albums: state
        }

        const albums = reducer([], action);

        expect(albums).to.have.length(3)
    })

    it('adds an album', () => {
        const action = {
            type: 'ADD_ALBUM',
            data: {
                id: 'album04'
            }
        }

        const albums = reducer([], action);
        expect(albums).to.have.length(1)
    })

    it('sorts the albums by addedAt', () => {
        const action = {
            type: 'SET_ALBUMS',
            albums: state
        }

        let albums = reducer([], action);
        let sortedAlbums = fromReducer.sortByAddedAt(albums);

        expect(sortedAlbums[0].id).to.be.equal('album01')
        expect(sortedAlbums[1].id).to.be.equal('album03')
        expect(sortedAlbums[2].id).to.be.equal('album02')

        albums = reducer(albums, {
            type: 'ADD_ALBUM',
            data: {
                collectionId: 'album04'
            }
        })

        sortedAlbums = fromReducer.sortByAddedAt(albums);

        expect(sortedAlbums[0].id).to.be.equal('album04')
        expect(sortedAlbums[1].id).to.be.equal('album01')
        expect(sortedAlbums[2].id).to.be.equal('album03')
        expect(sortedAlbums[3].id).to.be.equal('album02')
    })
})
