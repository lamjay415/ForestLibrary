import './footer.css';

const Footer = () => (
    <div className='footer-container'>
        <div className='footer-title'>Meet the team</div>
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
                <img src='https://avatars.githubusercontent.com/u/15056122?s=400&u=5d0c1a7232d4ec2caf66c32fb77dbb28227b4544&v=4' width='100'/>
                <div>Jay
                    <div onClick={() => window.open('https://www.linkedin.com/in/jay-lam/','_blank')} className='quick-link'>LinkedIn</div>
                    <div onClick={() => window.open('https://github.com/lamjay415','_blank')} className='quick-link'>Github</div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;