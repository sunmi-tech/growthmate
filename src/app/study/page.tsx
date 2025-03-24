"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AuthGuard from "@/components/AuthGuard";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async () => {
    if (!title || !content || !studyTime) {
      alert("제목과 학습 시간을 입력해주세요");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      alert("로그인 후 다시 시도해 주세요");
      return;
    }

    console.log("Current user ID:", user.id);

    const { error } = await supabase.from("study_logs").insert([
      {
        user_id: user.id,
        title,
        study_type:subject,
        content,
        study_time: Number(studyTime),
      },
    ]);

    if (error) {
      alert("등록 실패 ㅜㅜ");
      console.log(user.id);
    } else {
      alert("공부 기록이 등록되었습니다!");
      setTitle("");
      setContent("");
      setStudyTime("");
      setSubject("");
    }
  };

  return (
    <AuthGuard>
      <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">공부 기록 등록</h2>
        <div className="space-y-4">
        <div>
        <select 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:border-primary"
        >
          <option value="">공부 주제 선택</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="python">Paython</option>
          <option value="exam">정보처리기사</option>
          <option value="cs">CS</option>
          <option value="etc">ETC</option>
        </select>
        </div>
        
        <div>
        <input
          type="text"
          placeholder="공부제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
        <textarea
          placeholder="공부 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-none"
        />
        </div>

        <div>
        <input
          type="number"
          placeholder="공부시간"
          value={studyTime}
          onChange={(e) => setStudyTime(e.target.value)}
          className="w-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
        />
        </div>
        <button 
        className="w-full bg-primary hover:bg-primary-active text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        onClick={handleSubmit}>공부기록등록</button>
      </div>
      </div>
    </AuthGuard>
  );
}
