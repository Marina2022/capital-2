'use client'
import React, {useEffect} from 'react';
import Contacts from "@/components/contacts-page/Contacts";

const Page = () => {

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Contacts />
  );
};

export default Page;