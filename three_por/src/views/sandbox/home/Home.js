import React from 'react'
import {Button} from 'antd'
import axios from 'axios';

export default function Home() {
    const ajax=()=>{
        //取数据 get
        // axios.get("http://localhost:8000/posts?id=3").then(res=>{
        //     console.log("res",res.data);
        // })

        //增 post
        // axios.post("http://localhost:8000/posts",{
        //     title:"555",
        //     author:"不是我啊"
        // })

        //改 put (替换)
        // axios.put("http://localhost:8000/news/1",{
        //     author:"不是我啊修改"
        // })

        // 改 patch (替换)
        // axios.patch("http://localhost:8000/news/1",{
        //     content:"不是我啊修改---1"
        // })

        //删除 delete
        // axios.delete("http://localhost:8000/posts/1")

        //关联另外的字段 _embed (向下)
        // axios.get("http://localhost:8000/posts?_embed=comments").then(res=>{
        //     console.log("res",res.data);
        // })

        //关联另外的字段 _expand (向下)
        // axios.get("http://localhost:8000/comments?_expand=post").then(res=>{
        //     console.log("res",res.data);
        // })
        axios.get("http://localhost:8000/rights?_embed=children").then(res=>{
            console.log("res",res.data);
        })
    }
    return (
        <div>
            <Button type='primary' onClick={ajax}>button</Button>
        </div>
    )
}
