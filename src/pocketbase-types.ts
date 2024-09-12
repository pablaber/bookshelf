/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authors = "authors",
	BookNotes = "bookNotes",
	Books = "books",
	Categories = "categories",
	Shelves = "shelves",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthorsRecord = {
	books?: RecordIdString[]
	name: string
}

export type BookNotesRecord = {
	book: RecordIdString
	didDnf?: boolean
	dnfDate?: IsoDateString
	hasRead?: boolean
	isReading?: boolean
	note?: string
	rating?: number
	readingFinishDate?: IsoDateString
	readingStartDate?: IsoDateString
	user: RecordIdString
	wantsToRead?: boolean
}

export enum BooksExtSourceOptions {
	"google" = "google",
}
export type BooksRecord = {
	author: RecordIdString
	categories?: RecordIdString[]
	coverImageUrl?: string
	coverThumnailUrl?: string
	extId: string
	extSource: BooksExtSourceOptions
	isbn: string
	publishDate?: IsoDateString
	publisher?: string
	subTitle?: string
	title: string
}

export type CategoriesRecord = {
	books?: RecordIdString[]
	name: string
}

export type ShelvesRecord = {
	books: RecordIdString[]
	label: string
	user: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	isLibrarian?: boolean
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AuthorsResponse<Texpand = unknown> = Required<AuthorsRecord> & BaseSystemFields<Texpand>
export type BookNotesResponse<Texpand = unknown> = Required<BookNotesRecord> & BaseSystemFields<Texpand>
export type BooksResponse<Texpand = unknown> = Required<BooksRecord> & BaseSystemFields<Texpand>
export type CategoriesResponse<Texpand = unknown> = Required<CategoriesRecord> & BaseSystemFields<Texpand>
export type ShelvesResponse<Texpand = unknown> = Required<ShelvesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	authors: AuthorsRecord
	bookNotes: BookNotesRecord
	books: BooksRecord
	categories: CategoriesRecord
	shelves: ShelvesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	authors: AuthorsResponse
	bookNotes: BookNotesResponse
	books: BooksResponse
	categories: CategoriesResponse
	shelves: ShelvesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'authors'): RecordService<AuthorsResponse>
	collection(idOrName: 'bookNotes'): RecordService<BookNotesResponse>
	collection(idOrName: 'books'): RecordService<BooksResponse>
	collection(idOrName: 'categories'): RecordService<CategoriesResponse>
	collection(idOrName: 'shelves'): RecordService<ShelvesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
