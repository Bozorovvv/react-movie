import React from 'react'

function Footer() {
  return (
    <footer class="page-footer">
        <div class="container">
          © {new Date().getFullYear()} Created by React JS
          <a
            class="grey-text text-lighten-4 right"
            href="https://t.me/Bozorovvv"
          >
            @Bozorovvv
          </a>
      </div>
    </footer>
  )
}

export default Footer
