"use client";
import AuthGuard from "@/components/AuthGuard";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description || !startDate || !endDate || !isCompleted) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    const { data : { user } } = await supabase.auth.getUser();
    if(!user) {
        alert('로그인 후 다시 시도해 주세요')
        return;
    }

    const { error } = await supabase.from("schedules").insert({
      user_id: user.id,
      title,
      description,
      start_date: startDate,
      end_date: endDate,
      is_completed: isCompleted,
    });

    if (error) {
      alert("스케쥴 추가에 실패했습니다.");
      return;
    } else {
      alert("스케쥴이 추가되었습니다.");
      //초기화
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setIsCompleted(false);
    }
  };

  return (
    <AuthGuard>
      <div>
        <h2>스케쥴 추가</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="제목"
          type="text"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="내용"
        />
        <input
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          type="date"
        />
        <input
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          type="date"
        />
        <input
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
          type="checkbox"
        />
        <button onClick={handleSubmit}>추가</button>
      </div>
    </AuthGuard>
  );
}
