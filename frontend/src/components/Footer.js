import './footer.css';

const Footer = () => (
    <div className='footer-container'>
        <div>Meet the team</div>
        <div className='members-container'>
            <div className='member-info'>
                <img src='https://ca.slack-edge.com/T03GU501J-U01QQ6RL6G1-5e6de7fae34e-512' width='100'/>
                <div>John
                    <div onClick={() => window.open('https://www.linkedin.com/in/canberkvarli/','_blank')} className='quick-link'>LinkedIn</div>
                    <div onClick={() => window.open('https://github.com/canberkvarli','_blank')} className='quick-link'>Github</div>
                </div>
            </div>
            <div className='member-info'>
                <img src='https://ca.slack-edge.com/T03GU501J-U020Z12SXPC-512120e88aaa-512' width='100'/>
                <div>Hilal
                    <div onClick={() => window.open('https://www.linkedin.com/in/hilal-balci-bebek-546b001b6/','_blank')} className='quick-link'>LinkedIn</div>
                    <div onClick={() => window.open('https://github.com/hilalbbalci','_blank')} className='quick-link'>Github</div>
                </div>
            </div>
            <div className='member-info'>
                <img src='https://secure.gravatar.com/avatar/a1330a9ff5e261f502ea5f743554a3fc?secure=true&size=300' width='100'/>
                <div>Jay
                    <div onClick={() => window.open('https://www.linkedin.com/in/jay-lam/','_blank')} className='quick-link'>LinkedIn</div>
                    <div onClick={() => window.open('https://github.com/lamjay415','_blank')} className='quick-link'>Github</div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;