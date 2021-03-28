import classes from './Post.module.css'
import { HeartTwoTone } from '@ant-design/icons';
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type PropsType = {
    message: string
    like: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div>
            <div className={classes.item}>
            <Avatar size={64} icon={<UserOutlined />} />
                <span className={classes.writing}>
                    {props.message}
                </span>
                <a className={classes.like} href="#"><HeartTwoTone twoToneColor="#eb2f96"/>{props.like}</a>
            </div>
        </div>
    )  
}


export default Post;