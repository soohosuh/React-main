import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsumerList } from "../../api/adminAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null,
    cateno: 0
  }

const CenterBoard = ({queryObj, moveMemberReadPage}) => {

    const [consumer, setConsumer] = useState(initState)

    useEffect(() => {

        getConsumerList(queryObj).then(data => {

     
            setConsumer(data)

        })

    }, [queryObj])


    return ( 
        <div className="w-1/3 ">
        <div className='rounded-2xl m-2  h-[400px] overflow-hidden'>
            <div className="flex justify-between">
                <div className="ml-6 mt-2" style={{fontSize:"20px"}}>소비자 회원 리스트</div>
                <Link to={"/consumer/list"}>
                    <button className="mt-1 mr-6 text-gray-400">
                        more+      
                    </button>
                </Link>
            </div>  
                <div className="m-2 p-2">
                    <table className="w-full">
                        <thead className="border-t-2 border-b">
                        <tr className="bg-gray-200">
                            <th className="w-4/12">이메일</th>
                            <th className="w-3/12">닉네임</th>
                        </tr>
                        </thead>
                        <tbody>
                            {consumer.dtoList.map(({email, nickname, mno}, idx) => 
                                idx > 6 ? <></> : (
                                   
                                    <tr key={idx} className="hover:bg-gray-200 hover:cursor-pointer" onClick={() => moveMemberReadPage(mno)}>
                                        <td className="m-2 p-2 border-b-2 w-4/12 text-center">{email}</td>    
                                        <td className="m-2 p-2 border-b-2 w-3/12 text-center">{nickname}</td> 
                                    </tr>

                                ) 
                            ) 
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
    );
}
 
export default CenterBoard;