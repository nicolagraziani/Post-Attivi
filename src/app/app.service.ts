import { Post } from './models/post';

export let postArray: Post[] = [
  {
    title: 'Post1',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati atque, eius quos corporis pariatur consectetur, id amet beatae quae, quidem officiis nam? Voluptate aperiam minima recusandae, error nesciunt saepe odio.',
    active: true,
    author: "Nicola",
    category: "News",
    background: "bg-primary"

  },
  {
    title: 'Post2',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati atque, eius quos corporis pariatur consectetur, id amet beatae quae, quidem officiis nam? Voluptate aperiam minima recusandae, error nesciunt saepe odio.',
    active: true,
    author: "Luigi",
    category: "Sport",
    background: "bg-success"
  },
  {
    title: 'Post3',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati atque, eius quos corporis pariatur consectetur, id amet beatae quae, quidem officiis nam? Voluptate aperiam minima recusandae, error nesciunt saepe odio.',
    active: true,
    author: "Giuseppe",
    category: "Tech",
    background: "bg-danger"
  },
  {
    title: 'Post4',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati atque, eius quos corporis pariatur consectetur, id amet beatae quae, quidem officiis nam? Voluptate aperiam minima recusandae, error nesciunt saepe odio.',
    active: true,
    author: "Matteo",
    category: "News",
    background: "bg-info"
  },
  {
    title: 'Post5',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati atque, eius quos corporis pariatur consectetur, id amet beatae quae, quidem officiis nam? Voluptate aperiam minima recusandae, error nesciunt saepe odio.',
    active: true,
    author: "Nicola",
    category: "Sport",
    background: "bg-warning"
  }
];

export function getPost(post?:Post): Post[]|Post {
  if(!post){
    let risArray: Post [] = [];
    for (let i of postArray) {
      risArray.push(i);
  }
  return risArray;}

  else {
    return postArray[postArray.indexOf(post)];
  }

}

export function getAttivi(): Post[] {
  let risArray: Post[] = [];

  for (let i of postArray) {
    if (i.active) {
      risArray.push(i);
    }
  }
  return risArray;
}

export function getNonAttivi(): Post[] {
  let risArray: Post[] = [];

  for (let i of postArray) {
    if (!i.active) {
      risArray.push(i);
    }
  }
  return risArray;
}

export function disattivaPost(post: Post) {
  post.active = false;
}

export function attivaPost(post:Post){
  post.active = true;
}
