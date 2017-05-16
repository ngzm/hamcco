import React from 'react';
import './Hamguide.css';

function Hamguide() {
  return (
    <aside className="hamguide-container">
      <section>
        <h2>あそびかた</h2>
        <ul>
          <li>ハムっこと楽しく！？会話してあそびます。</li>
          <li>ハムっこは、皆さんの言葉に反応して何か返事をしてくれます。</li>
          <li>会話の内容によって、ハムっこの機嫌が良くなったり、悪くなったりします。</li>
          <li>例えば、「すごい」「すてき」「かわいい」などの言葉でほめると機嫌がよくなります。</li>
          <li>逆に、「ばか」「アホ」「コラ！」「ダメ」などの言葉を浴びせると機嫌が悪くなります。</li>
          <li>現在の機嫌は、「ごきげんメータ」に表示されます。</li>
          <li>機嫌によって、次の状態に変化します。</li>
          <ol>
            <li>天使ハム～「ちょ～ハッピ～」</li>
            <li>コックハム～「プチしあわせ～」</li>
            <li>キキハム～「機嫌ふつう」</li>
            <li>おにハム～「ちょいおこってま～す」</li>
            <li>おこりハム～「機嫌悪～」</li>
          </ol>
          <li>その他にも、突然機嫌が変わってしまうことがありますので、気をつけて下さい。</li>
        </ul>
      </section>
      <section>
        <h2>ちゅうい</h2>
        <ul>
          <li>たまに、というか、よく会話が飛びます！</li>
          <li>たまに、暴言も吐きます、、かんべんして～</li>
        </ul>
      </section>
    </aside>
  );
}

export default Hamguide;
