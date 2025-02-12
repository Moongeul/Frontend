import {useEffect, useState} from "react";
import {IonContent, IonPage} from '@ionic/react';
import qs from 'query-string';

import {searchBook} from "../lib/api/search";
import {BookInfoType, BookSearchType} from "../types/search";
import {ResponseType} from "../types/common";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SearchIcon from "../assets/common/SearchIcon";
import useDebounce from "../hooks/useDebounce";
import SummaryBookInfo from "../components/common/SummaryBookInfo";

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const debouncedValue = useDebounce<string>(searchValue, 100);
    const [searchBookList, setSearchBookList] = useState<BookInfoType[]>()

    /**
     * 쿼리파라미터에서 검색어
     */
    useEffect(() => {
        const query = {
            keyword: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query,
        });

    }, [debouncedValue]);


    //단어가 바뀔 때 마다 검색하여 요청
    useEffect(() => {
        if (searchValue) {
            searchBook(searchValue, 1, 50).then((res: ResponseType<BookSearchType>) => {
                console.log("res", res.data.bookList)
                setSearchBookList(res.data.bookList)
            });
        } else {
            setSearchBookList(undefined);
        }
    }, [searchValue]);

    const searchIcon = () => {
        return (
            <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                <SearchIcon />
            </div>
        )
    }

    return (
        <IonPage className="page-mypage">
            <IonContent fullscreen>
                <Header headerType={"title"} title={"도서 검색"} />
                <main className={"px-5"}>
                    <div className={"h-[52px]"}/>
                    <Input inputValue={searchValue} setInputValue={setSearchValue}
                           inputClassName={"w-full border border-black py-[13.5px]"} LeftIcon={searchIcon}
                           placeholder={"책 제목/저자를 검색해보세요."}/>
                    <section className={"mt-[24px]"}>
                        {searchBookList && searchBookList.map((book) => {
                            return (
                                <SummaryBookInfo
                                    key={book.isbn}
                                    title={book.title}
                                    image={book.image}
                                    publisher={book.publisher}
                                    author={book.author}
                                    isbn={book.isbn}
                                    pubdate={book.pubdate}/>
                            )
                        })}
                    </section>
                </main>
                <Navbar/>
            </IonContent>
        </IonPage>
    );
};

export default Search;
