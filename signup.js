const countries = [
  { name: 'Afghanistan', code: '+93', flag: 'https://flagcdn.com/16x12/af.png', maxLength: 9, validPatterns: [/^7/, /^8/, /^9/] },
  { name: 'Albania', code: '+355', flag: 'https://flagcdn.com/16x12/al.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Algeria', code: '+213', flag: 'https://flagcdn.com/16x12/dz.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'American Samoa', code: '+1-684', flag: 'https://flagcdn.com/16x12/as.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Andorra', code: '+376', flag: 'https://flagcdn.com/16x12/ad.png', maxLength: 6, validPatterns: [/^\d{6}$/] },
  { name: 'Angola', code: '+244', flag: 'https://flagcdn.com/16x12/ao.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Anguilla', code: '+1-264', flag: 'https://flagcdn.com/16x12/ai.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Antigua & Barbuda', code: '+1-268', flag: 'https://flagcdn.com/16x12/ag.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Argentina', code: '+54', flag: 'https://flagcdn.com/16x12/ar.png', maxLength: 10, validPatterns: [/^1/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Armenia', code: '+374', flag: 'https://flagcdn.com/16x12/am.png', maxLength: 8, validPatterns: [/^3/] },
  { name: 'Aruba', code: '+297', flag: 'https://flagcdn.com/16x12/aw.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Australia', code: '+61', flag: 'https://flagcdn.com/16x12/au.png', maxLength: 9, validPatterns: [/^4/] },
  { name: 'Austria', code: '+43', flag: 'https://flagcdn.com/16x12/at.png', maxLength: 10, validPatterns: [/^\d/] },
  { name: 'Azerbaijan', code: '+994', flag: 'https://flagcdn.com/16x12/az.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Bahamas', code: '+1-242', flag: 'https://flagcdn.com/16x12/bs.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Bahrain', code: '+973', flag: 'https://flagcdn.com/16x12/bh.png', maxLength: 8, validPatterns: [/^3/] },
  { name: 'Bangladesh', code: '+880', flag: 'https://flagcdn.com/16x12/bd.png', maxLength: 10, validPatterns: [/^1/] },
  { name: 'Barbados', code: '+1-246', flag: 'https://flagcdn.com/16x12/bb.png', maxLength: 7, validPatterns: [/^2/] },
  { name: 'Belarus', code: '+375', flag: 'https://flagcdn.com/16x12/by.png', maxLength: 9, validPatterns: [/^2/, /^3/] },
  { name: 'Belgium', code: '+32', flag: 'https://flagcdn.com/16x12/be.png', maxLength: 8, validPatterns: [/^4/, /^3/] },
  { name: 'Belize', code: '+501', flag: 'https://flagcdn.com/16x12/bz.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Benin', code: '+229', flag: 'https://flagcdn.com/16x12/bj.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Bermuda', code: '+1-441', flag: 'https://flagcdn.com/16x12/bm.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Bhutan', code: '+975', flag: 'https://flagcdn.com/16x12/bt.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Bolivia', code: '+591', flag: 'https://flagcdn.com/16x12/bo.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Bonaire, Sint Eustatius & Saba', code: '+599', flag: 'https://flagcdn.com/16x12/bq.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Bosnia and Herzegovina', code: '+387', flag: 'https://flagcdn.com/16x12/ba.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Botswana', code: '+267', flag: 'https://flagcdn.com/16x12/bw.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Brazil', code: '+55', flag: 'https://flagcdn.com/16x12/br.png', maxLength: 10, validPatterns: [/^1/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'British Virgin Islands', code: '+1-284', flag: 'https://flagcdn.com/16x12/vg.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Brunei Darussalam', code: '+673', flag: 'https://flagcdn.com/16x12/bn.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Bulgaria', code: '+359', flag: 'https://flagcdn.com/16x12/bg.png', maxLength: 8, validPatterns: [/^8/, /^9/] },
  { name: 'Burkina Faso', code: '+226', flag: 'https://flagcdn.com/16x12/bf.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Burundi', code: '+257', flag: 'https://flagcdn.com/16x12/bi.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Cabo Verde', code: '+238', flag: 'https://flagcdn.com/16x12/cv.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Cambodia', code: '+855', flag: 'https://flagcdn.com/16x12/kh.png', maxLength: 9, validPatterns: [/^1/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Cameroon', code: '+237', flag: 'https://flagcdn.com/16x12/cm.png', maxLength: 9, validPatterns: [/^6/, /^7/] },
  { name: 'Canada', code: '+1', flag: 'https://flagcdn.com/16x12/ca.png', maxLength: 10, validPatterns: [/^\d/] },
  { name: 'Cayman Islands', code: '+1-345', flag: 'https://flagcdn.com/16x12/ky.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Central African Republic', code: '+236', flag: 'https://flagcdn.com/16x12/cf.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Chad', code: '+235', flag: 'https://flagcdn.com/16x12/td.png', maxLength: 8, validPatterns: [/^6/, /^7/] },
  { name: 'Chile', code: '+56', flag: 'https://flagcdn.com/16x12/cl.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'China', code: '+86', flag: 'https://flagcdn.com/16x12/cn.png', maxLength: 11, validPatterns: [/^1/] },
  { name: 'Colombia', code: '+57', flag: 'https://flagcdn.com/16x12/co.png', maxLength: 10, validPatterns: [/^3/] },
  { name: 'Comoros', code: '+269', flag: 'https://flagcdn.com/16x12/km.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Congo (Dem. Rep.)', code: '+243', flag: 'https://flagcdn.com/16x12/cd.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Congo (Rep.)', code: '+242', flag: 'https://flagcdn.com/16x12/cg.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Cook Islands', code: '+682', flag: 'https://flagcdn.com/16x12/ck.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Costa Rica', code: '+506', flag: 'https://flagcdn.com/16x12/cr.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Côte d"Ivoire', code: '+225', flag: 'https://flagcdn.com/16x12/ci.png', maxLength: 10, validPatterns: [/^0/] },
  { name: 'Croatia', code: '+385', flag: 'https://flagcdn.com/16x12/hr.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Cuba', code: '+53', flag: 'https://flagcdn.com/16x12/cu.png', maxLength: 8, validPatterns: [/^5/, /^6/] },
  { name: 'Curaçao', code: '+599', flag: 'https://flagcdn.com/16x12/cw.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Cyprus', code: '+357', flag: 'https://flagcdn.com/16x12/cy.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Czech Republic', code: '+420', flag: 'https://flagcdn.com/16x12/cz.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Denmark', code: '+45', flag: 'https://flagcdn.com/16x12/dk.png', maxLength: 8, validPatterns: [/^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Diego Garcia', code: '+246', flag: 'https://flagcdn.com/16x12/io.png', maxLength: 7, validPatterns: [/^38/] },
  { name: 'Djibouti', code: '+253', flag: 'https://flagcdn.com/16x12/dj.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Dominica', code: '+1-767', flag: 'https://flagcdn.com/16x12/dm.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Dominican Republic', code: '+1-809', flag: 'https://flagcdn.com/16x12/do.png', maxLength: 10, validPatterns: [/^8/, /^9/] },
  { name: 'Dominican Republic', code: '+1-829', flag: 'https://flagcdn.com/16x12/do.png', maxLength: 10, validPatterns: [/^8/, /^9/] },
  { name: 'Dominican Republic', code: '+1-849', flag: 'https://flagcdn.com/16x12/do.png', maxLength: 10, validPatterns: [/^8/, /^9/] },
  { name: 'Ecuador', code: '+593', flag: 'https://flagcdn.com/16x12/ec.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Egypt', code: '+20', flag: 'https://flagcdn.com/16x12/eg.png', maxLength: 10, validPatterns: [/^10/, /^11/, /^12/, /^15/] },
  { name: 'El Salvador', code: '+503', flag: 'https://flagcdn.com/16x12/sv.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Equatorial Guinea', code: '+240', flag: 'https://flagcdn.com/16x12/gq.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Eritrea', code: '+291', flag: 'https://flagcdn.com/16x12/er.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Estonia', code: '+372', flag: 'https://flagcdn.com/16x12/ee.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Eswatini', code: '+268', flag: 'https://flagcdn.com/16x12/sz.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Ethiopia', code: '+251', flag: 'https://flagcdn.com/16x12/et.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Falkland Islands', code: '+500', flag: 'https://flagcdn.com/16x12/fk.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Faroe Islands', code: '+298', flag: 'https://flagcdn.com/16x12/fo.png', maxLength: 7, validPatterns: [/^2/] },
  { name: 'Fiji', code: '+679', flag: 'https://flagcdn.com/16x12/fj.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Finland', code: '+358', flag: 'https://flagcdn.com/16x12/fi.png', maxLength: 9, validPatterns: [/^4/, /^5/] },
  { name: 'France', code: '+33', flag: 'https://flagcdn.com/16x12/fr.png', maxLength: 9, validPatterns: [/^6/, /^7/] },
  { name: 'French Guiana', code: '+594', flag: 'https://flagcdn.com/16x12/gf.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'French Polynesia', code: '+689', flag: 'https://flagcdn.com/16x12/pf.png', maxLength: 9, validPatterns: [/^8/] },
  { name: 'Gabon', code: '+241', flag: 'https://flagcdn.com/16x12/ga.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'Gambia', code: '+220', flag: 'https://flagcdn.com/16x12/gm.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Georgia', code: '+995', flag: 'https://flagcdn.com/16x12/ge.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Germany', code: '+49', flag: 'https://flagcdn.com/16x12/de.png', maxLength: 10, validPatterns: [/^1/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Ghana', code: '+233', flag: 'https://flagcdn.com/16x12/gh.png', maxLength: 9, validPatterns: [/^2/] },
  { name: 'Gibraltar', code: '+350', flag: 'https://flagcdn.com/16x12/gi.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Greece', code: '+30', flag: 'https://flagcdn.com/16x12/gr.png', maxLength: 10, validPatterns: [/^6/] },
  { name: 'Greenland', code: '+299', flag: 'https://flagcdn.com/16x12/gl.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Grenada', code: '+1-473', flag: 'https://flagcdn.com/16x12/gd.png', maxLength: 7, validPatterns: [/^4/] },
  { name: 'Guadeloupe', code: '+590', flag: 'https://flagcdn.com/16x12/gp.png', maxLength: 10, validPatterns: [/^6/] },
  { name: 'Guam', code: '+1-671', flag: 'https://flagcdn.com/16x12/gu.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Guatemala', code: '+502', flag: 'https://flagcdn.com/16x12/gt.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Guinea', code: '+224', flag: 'https://flagcdn.com/16x12/gn.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'Guinea-Bissau', code: '+245', flag: 'https://flagcdn.com/16x12/gw.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Guyana', code: '+592', flag: 'https://flagcdn.com/16x12/gy.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Haiti', code: '+509', flag: 'https://flagcdn.com/16x12/ht.png', maxLength: 8, validPatterns: [/^3/, /^4/] },
  { name: 'Honduras', code: '+504', flag: 'https://flagcdn.com/16x12/hn.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Hong Kong', code: '+852', flag: 'https://flagcdn.com/16x12/hk.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Hungary', code: '+36', flag: 'https://flagcdn.com/16x12/hu.png', maxLength: 9, validPatterns: [/^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Iceland', code: '+354', flag: 'https://flagcdn.com/16x12/is.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'India', code: '+91', flag: 'https://flagcdn.com/16x12/in.png', maxLength: 10, validPatterns: [/^7/, /^8/, /^9/] },
  { name: 'Indonesia', code: '+62', flag: 'https://flagcdn.com/16x12/id.png', maxLength: 10, validPatterns: [/^8/] },
  { name: 'Iran', code: '+98', flag: 'https://flagcdn.com/16x12/ir.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Iraq', code: '+964', flag: 'https://flagcdn.com/16x12/iq.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Ireland', code: '+353', flag: 'https://flagcdn.com/16x12/ie.png', maxLength: 9, validPatterns: [/^8/] },
  { name: 'Israel', code: '+972', flag: 'https://flagcdn.com/16x12/il.png', maxLength: 9, validPatterns: [/^5/, /^6/] },
  { name: 'Italy', code: '+39', flag: 'https://flagcdn.com/16x12/it.png', maxLength: 10, validPatterns: [/^3/] },
  { name: 'Jamaica', code: '+1-876', flag: 'https://flagcdn.com/16x12/jm.png', maxLength: 7, validPatterns: [/^8/] },
  { name: 'Japan', code: '+81', flag: 'https://flagcdn.com/16x12/jp.png', maxLength: 11, validPatterns: [/^9/] },
  { name: 'Jordan', code: '+962', flag: 'https://flagcdn.com/16x12/jo.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Kazakhstan', code: '+7', flag: 'https://flagcdn.com/16x12/kz.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Kenya', code: '+254', flag: 'https://flagcdn.com/16x12/ke.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Kiribati', code: '+686', flag: 'https://flagcdn.com/16x12/ki.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Kosovo', code: '+383', flag: 'https://flagcdn.com/16x12/xk.png', maxLength: 9, validPatterns: [/^4/] },
  { name: 'Kuwait', code: '+965', flag: 'https://flagcdn.com/16x12/kw.png', maxLength: 8, validPatterns: [/^6/, /^7/] },
  { name: 'Kyrgyzstan', code: '+996', flag: 'https://flagcdn.com/16x12/kg.png', maxLength: 9, validPatterns: [/^5/, /^6/] },
  { name: 'Laos', code: '+856', flag: 'https://flagcdn.com/16x12/la.png', maxLength: 8, validPatterns: [/^2/] },
  { name: 'Latvia', code: '+371', flag: 'https://flagcdn.com/16x12/lv.png', maxLength: 8, validPatterns: [/^2/, /^3/] },
  { name: 'Lebanon', code: '+961', flag: 'https://flagcdn.com/16x12/lb.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Lesotho', code: '+266', flag: 'https://flagcdn.com/16x12/ls.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Liberia', code: '+231', flag: 'https://flagcdn.com/16x12/lr.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Libya', code: '+218', flag: 'https://flagcdn.com/16x12/ly.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Liechtenstein', code: '+423', flag: 'https://flagcdn.com/16x12/li.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Lithuania', code: '+370', flag: 'https://flagcdn.com/16x12/lt.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'Luxembourg', code: '+352', flag: 'https://flagcdn.com/16x12/lu.png', maxLength: 9, validPatterns: [/^6/, /^7/] },
  { name: 'Macau', code: '+853', flag: 'https://flagcdn.com/16x12/mo.png', maxLength: 8, validPatterns: [/^6/, /^8/] },
  { name: 'Madagascar', code: '+261', flag: 'https://flagcdn.com/16x12/mg.png', maxLength: 9, validPatterns: [/^3/] },
  { name: 'Malawi', code: '+265', flag: 'https://flagcdn.com/16x12/mw.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Malaysia', code: '+60', flag: 'https://flagcdn.com/16x12/my.png', maxLength: 10, validPatterns: [/^1/, /^6/, /^7/] },
  { name: 'Maldives', code: '+960', flag: 'https://flagcdn.com/16x12/mv.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Mali', code: '+223', flag: 'https://flagcdn.com/16x12/ml.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Malta', code: '+356', flag: 'https://flagcdn.com/16x12/mt.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Marshall Islands', code: '+692', flag: 'https://flagcdn.com/16x12/mh.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Martinique', code: '+596', flag: 'https://flagcdn.com/16x12/mq.png', maxLength: 9, validPatterns: [/^696/, /^596/] },
  { name: 'Mauritania', code: '+222', flag: 'https://flagcdn.com/16x12/mr.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Mauritius', code: '+230', flag: 'https://flagcdn.com/16x12/mu.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Mexico', code: '+52', flag: 'https://flagcdn.com/16x12/mx.png', maxLength: 10, validPatterns: [/^1/] },
  { name: 'Micronesia', code: '+691', flag: 'https://flagcdn.com/16x12/fm.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Moldova', code: '+373', flag: 'https://flagcdn.com/16x12/md.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Monaco', code: '+377', flag: 'https://flagcdn.com/16x12/mc.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Mongolia', code: '+976', flag: 'https://flagcdn.com/16x12/mn.png', maxLength: 8, validPatterns: [/^8/] },
  { name: 'Montenegro', code: '+382', flag: 'https://flagcdn.com/16x12/me.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'Montserrat', code: '+1-664', flag: 'https://flagcdn.com/16x12/ms.png', maxLength: 7, validPatterns: [/^4/] },
  { name: 'Morocco', code: '+212', flag: 'https://flagcdn.com/16x12/ma.png', maxLength: 10, validPatterns: [/^6/] },
  { name: 'Mozambique', code: '+258', flag: 'https://flagcdn.com/16x12/mz.png', maxLength: 9, validPatterns: [/^8/] },
  { name: 'Myanmar', code: '+95', flag: 'https://flagcdn.com/16x12/mm.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Namibia', code: '+264', flag: 'https://flagcdn.com/16x12/na.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'Nauru', code: '+674', flag: 'https://flagcdn.com/16x12/nr.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Nepal', code: '+977', flag: 'https://flagcdn.com/16x12/np.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Netherlands', code: '+31', flag: 'https://flagcdn.com/16x12/nl.png', maxLength: 9, validPatterns: [/^6/, /^7/] },
  { name: 'New Caledonia', code: '+687', flag: 'https://flagcdn.com/16x12/nc.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'New Zealand', code: '+64', flag: 'https://flagcdn.com/16x12/nz.png', maxLength: 9, validPatterns: [/^2/] },
  { name: 'Nicaragua', code: '+505', flag: 'https://flagcdn.com/16x12/ni.png', maxLength: 8, validPatterns: [/^8/] },
  { name: 'Niger', code: '+227', flag: 'https://flagcdn.com/16x12/ne.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Nigeria', code: '+234', flag: 'https://flagcdn.com/16x12/ng.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Niue', code: '+683', flag: 'https://flagcdn.com/16x12/nu.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Norfolk Island', code: '+672', flag: 'https://flagcdn.com/16x12/nf.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'North Korea', code: '+850', flag: 'https://flagcdn.com/16x12/kp.png', maxLength: 9, validPatterns: [/^1/] },
  { name: 'North Macedonia', code: '+389', flag: 'https://flagcdn.com/16x12/mk.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Northern Mariana Islands', code: '+1-670', flag: 'https://flagcdn.com/16x12/mp.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Norway', code: '+47', flag: 'https://flagcdn.com/16x12/no.png', maxLength: 8, validPatterns: [/^4/, /^9/] },
  { name: 'Oman', code: '+968', flag: 'https://flagcdn.com/16x12/om.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Pakistan', code: '+92', flag: 'https://flagcdn.com/16x12/pk.png', maxLength: 10, validPatterns: [/^3/] },
  { name: 'Palau', code: '+680', flag: 'https://flagcdn.com/16x12/pw.png', maxLength: 7, validPatterns: [/^3/] },
  { name: 'Palestine', code: '+970', flag: 'https://flagcdn.com/16x12/ps.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'Panama', code: '+507', flag: 'https://flagcdn.com/16x12/pa.png', maxLength: 7, validPatterns: [/^6/, /^7/] },
  { name: 'Papua New Guinea', code: '+675', flag: 'https://flagcdn.com/16x12/pg.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Paraguay', code: '+595', flag: 'https://flagcdn.com/16x12/py.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Peru', code: '+51', flag: 'https://flagcdn.com/16x12/pe.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Philippines', code: '+63', flag: 'https://flagcdn.com/16x12/ph.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Poland', code: '+48', flag: 'https://flagcdn.com/16x12/pl.png', maxLength: 9, validPatterns: [/^5/, /^6/] },
  { name: 'Portugal', code: '+351', flag: 'https://flagcdn.com/16x12/pt.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Puerto Rico', code: '+1-787', flag: 'https://flagcdn.com/16x12/pr.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Puerto Rico', code: '+1-939', flag: 'https://flagcdn.com/16x12/pr.png', maxLength: 7, validPatterns: [/^9/] },
  { name: 'Qatar', code: '+974', flag: 'https://flagcdn.com/16x12/qa.png', maxLength: 8, validPatterns: [/^3/] },
  { name: 'Réunion', code: '+262', flag: 'https://flagcdn.com/16x12/re.png', maxLength: 10, validPatterns: [/^6/] },
  { name: 'Romania', code: '+40', flag: 'https://flagcdn.com/16x12/ro.png', maxLength: 10, validPatterns: [/^7/, /^3/] },
  { name: 'Russia', code: '+7', flag: 'https://flagcdn.com/16x12/ru.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Rwanda', code: '+250', flag: 'https://flagcdn.com/16x12/rw.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Saint Helena', code: '+247', flag: 'https://flagcdn.com/16x12/sh.png', maxLength: 5, validPatterns: [/^2/] },
  { name: 'Saint Helena', code: '+290', flag: 'https://flagcdn.com/16x12/sh.png', maxLength: 5, validPatterns: [/^2/] },
  { name: 'Saint Kitts and Nevis', code: '+1-869', flag: 'https://flagcdn.com/16x12/kn.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Saint Lucia', code: '+1-758', flag: 'https://flagcdn.com/16x12/lc.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Saint Pierre & Miquelon', code: '+508', flag: 'https://flagcdn.com/16x12/pm.png', maxLength: 8, validPatterns: [/^5/] },
  { name: 'Saint Vincent and the Grenadines', code: '+1-784', flag: 'https://flagcdn.com/16x12/vc.png', maxLength: 7, validPatterns: [/^4/] },
  { name: 'Samoa', code: '+685', flag: 'https://flagcdn.com/16x12/ws.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'San Marino', code: '+378', flag: 'https://flagcdn.com/16x12/sm.png', maxLength: 9, validPatterns: [/^3/] },
  { name: 'São Tomé & Príncipe', code: '+239', flag: 'https://flagcdn.com/16x12/st.png', maxLength: 7, validPatterns: [/^9/] },
  { name: 'Saudi Arabia', code: '+966', flag: 'https://flagcdn.com/16x12/sa.png', maxLength: 9, validPatterns: [/^5/, /^6/, /^7/, /^8/] },
  { name: 'Senegal', code: '+221', flag: 'https://flagcdn.com/16x12/sn.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Serbia', code: '+381', flag: 'https://flagcdn.com/16x12/rs.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'Seychelles', code: '+248', flag: 'https://flagcdn.com/16x12/sc.png', maxLength: 7, validPatterns: [/^2/] },
  { name: 'Sierra Leone', code: '+232', flag: 'https://flagcdn.com/16x12/sl.png', maxLength: 8, validPatterns: [/^7/] },
  { name: 'Singapore', code: '+65', flag: 'https://flagcdn.com/16x12/sg.png', maxLength: 8, validPatterns: [/^8/] },
  { name: 'Sint Maarten', code: '+1-721', flag: 'https://flagcdn.com/16x12/sx.png', maxLength: 7, validPatterns: [/^5/] },
  { name: 'Slovakia', code: '+421', flag: 'https://flagcdn.com/16x12/sk.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Slovenia', code: '+386', flag: 'https://flagcdn.com/16x12/si.png', maxLength: 8, validPatterns: [/^3/] },
  { name: 'Solomon Islands', code: '+677', flag: 'https://flagcdn.com/16x12/sb.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Somalia', code: '+252', flag: 'https://flagcdn.com/16x12/so.png', maxLength: 8, validPatterns: [/^6/] },
  { name: 'South Africa', code: '+27', flag: 'https://flagcdn.com/16x12/za.png', maxLength: 9, validPatterns: [/^6/, /^7/, /^8/] },
  { name: 'South Korea', code: '+82', flag: 'https://flagcdn.com/16x12/kr.png', maxLength: 10, validPatterns: [/^1/] },
  { name: 'South Sudan', code: '+211', flag: 'https://flagcdn.com/16x12/ss.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Spain', code: '+34', flag: 'https://flagcdn.com/16x12/es.png', maxLength: 9, validPatterns: [/^6/, /^7/] },
  { name: 'Sri Lanka', code: '+94', flag: 'https://flagcdn.com/16x12/lk.png', maxLength: 10, validPatterns: [/^7/, /^8/] },
  { name: 'Sudan', code: '+249', flag: 'https://flagcdn.com/16x12/sd.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Suriname', code: '+597', flag: 'https://flagcdn.com/16x12/sr.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Sweden', code: '+46', flag: 'https://flagcdn.com/16x12/se.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Switzerland', code: '+41', flag: 'https://flagcdn.com/16x12/ch.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Syria', code: '+963', flag: 'https://flagcdn.com/16x12/sy.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Taiwan', code: '+886', flag: 'https://flagcdn.com/16x12/tw.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Tajikistan', code: '+992', flag: 'https://flagcdn.com/16x12/tj.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Tanzania', code: '+255', flag: 'https://flagcdn.com/16x12/tz.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Thailand', code: '+66', flag: 'https://flagcdn.com/16x12/th.png', maxLength: 9, validPatterns: [/^8/, /^9/] },
  { name: 'Timor-Leste', code: '+670', flag: 'https://flagcdn.com/16x12/tl.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Togo', code: '+228', flag: 'https://flagcdn.com/16x12/tg.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'Tokelau', code: '+690', flag: 'https://flagcdn.com/16x12/tk.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Tonga', code: '+676', flag: 'https://flagcdn.com/16x12/to.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Trinidad and Tobago', code: '+1-868', flag: 'https://flagcdn.com/16x12/tt.png', maxLength: 7, validPatterns: [/^6/] },
  { name: 'Tunisia', code: '+216', flag: 'https://flagcdn.com/16x12/tn.png', maxLength: 8, validPatterns: [/^2/] },
  { name: 'Turkey', code: '+90', flag: 'https://flagcdn.com/16x12/tr.png', maxLength: 10, validPatterns: [/^5/] },
  { name: 'Turkmenistan', code: '+993', flag: 'https://flagcdn.com/16x12/tm.png', maxLength: 8, validPatterns: [/^3/] },
  { name: 'Turks & Caicos Islands', code: '+1-649', flag: 'https://flagcdn.com/16x12/tc.png', maxLength: 7, validPatterns: [/^4/] },
  { name: 'Tuvalu', code: '+688', flag: 'https://flagcdn.com/16x12/tv.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Uganda', code: '+256', flag: 'https://flagcdn.com/16x12/ug.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'Ukraine', code: '+380', flag: 'https://flagcdn.com/16x12/ua.png', maxLength: 9, validPatterns: [/^6/] },
  { name: 'United Arab Emirates', code: '+971', flag: 'https://flagcdn.com/16x12/ae.png', maxLength: 9, validPatterns: [/^5/] },
  { name: 'United Kingdom', code: '+44', flag: 'https://flagcdn.com/16x12/gb.png', maxLength: 10, validPatterns: [/^7/] },
  { name: 'United States', code: '+1', flag: 'https://flagcdn.com/16x12/us.png', maxLength: 10, validPatterns: [/^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/] },
  { name: 'Uruguay', code: '+598', flag: 'https://flagcdn.com/16x12/uy.png', maxLength: 8, validPatterns: [/^9/] },
  { name: 'US Virgin Islands', code: '+1-340', flag: 'https://flagcdn.com/16x12/vi.png', maxLength: 10, validPatterns: [/^340/] },
  { name: 'Uzbekistan', code: '+998', flag: 'https://flagcdn.com/16x12/uz.png', maxLength: 9, validPatterns: [/^9/] },
  { name: 'Vanuatu', code: '+678', flag: 'https://flagcdn.com/16x12/vu.png', maxLength: 7, validPatterns: [/^7/] },
  { name: 'Venezuela', code: '+58', flag: 'https://flagcdn.com/16x12/ve.png', maxLength: 10, validPatterns: [/^4/] },
  { name: 'Vietnam', code: '+84', flag: 'https://flagcdn.com/16x12/vn.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Wallis & Futuna', code: '+681', flag: 'https://flagcdn.com/16x12/wf.png', maxLength: 5, validPatterns: [/^7/] },
  { name: 'Yemen', code: '+967', flag: 'https://flagcdn.com/16x12/ye.png', maxLength: 9, validPatterns: [/^7/] },
  { name: 'Zambia', code: '+260', flag: 'https://flagcdn.com/16x12/zm.png', maxLength: 10, validPatterns: [/^9/] },
  { name: 'Zimbabwe', code: '+263', flag: 'https://flagcdn.com/16x12/zw.png', maxLength: 9, validPatterns: [/^7/] }
];

let dropdownOpen = false;

function toggleDropdown(event) {
  const countryList = document.getElementById("countryList");
  const arrow = document.getElementById("arrow");

  if (dropdownOpen) {
      countryList.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
  } else {
      showAllCountries();
      arrow.style.transform = 'rotate(180deg)';
  }

  dropdownOpen = !dropdownOpen;
  event.stopPropagation();
}

function showAllCountries() {
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = '';

  countries.forEach(country => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${country.flag}" alt="Flag"> ${country.name} (${country.code})`;
      li.onclick = () => selectCountry(country);
      countryList.appendChild(li);
  });
  countryList.style.display = 'block';
}

function filterCountries() {
  const input = document.getElementById("country").value.toLowerCase();
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = ''; // Clear list

  const filteredCountries = countries.filter(country => country.name.toLowerCase().startsWith(input));

  if (filteredCountries.length > 0) {
      filteredCountries.forEach(country => {
          const li = document.createElement("li");
          li.innerHTML = `<img src="${country.flag}" alt="Flag"> ${country.name} (${country.code})`;
          li.onclick = () => selectCountry(country);
          countryList.appendChild(li);
      });
      countryList.style.display = 'block';
  } else {
      countryList.style.display = 'none';
  }
}
function selectCountry(country) {
  document.getElementById("country").value = country.name;
  document.getElementById("countryCode").value = country.code;
  document.getElementById("phoneNumber").setAttribute('maxlength', country.maxLength);
  document.getElementById("phoneNumber").setAttribute('minlength', country.maxLength);
  document.getElementById("phoneNumber").placeholder = "Phone Number";
  document.getElementById("phoneNumber").value = '';

  // Close the dropdown
  const countryList = document.getElementById("countryList");
  countryList.style.display = 'none';
  dropdownOpen = false; // Update dropdown state
}
    // Close the dropdown when clicking outside of it
    document.addEventListener("click", () => {
      const countryList = document.getElementById("countryList");
      countryList.style.display = 'none';
      dropdownOpen = false;
      const arrow = document.getElementById("arrow");
      arrow.style.transform = 'rotate(0deg)';
  });

  function submitNumberForm() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const countryCode = document.getElementById('countryCode').value;
    const selectedCountry = countries.find(country => country.code === countryCode);
    if (selectedCountry)
    {
        const maxLength = selectedCountry.maxLength;
        const validPatterns = selectedCountry.validPatterns;

        if (phoneNumber.length !== maxLength) {
            alert(`The number must be ${maxLength} digits.`);
            return false;
        }
        let isValid = false;
    for (let pattern of validPatterns) {
      if (pattern.test(phoneNumber)) {
        isValid = true;
        break;
      }
    }

    if (!isValid) {
      let message = "The phone number must start with one of the following numbers: ";
      for (let pattern of validPatterns) {
        message += pattern.source.replace("^", "") + ", ";
      }
      message = message.slice(0, -2);
      alert(message);
      return false;
    }
  }
        return true;
    }


  function validateName(input, nameType) {
    const value = input.value;
    
    if (value.length < 3 || value.length > 10) {
        alert("The name must be between 3 and 10 characters.");
        return false;
    }


    if (/[\d\s!@#\$%\^\&*\)\(+=._-]/.test(value)) {
        alert("The name must not contain numbers, symbols or spaces.");
        return false;
    }

    const isArabic = /[\u0600-\u06FF]/.test(value); 
    const isEnglish = /[A-Za-z]/.test(value); 

    if (isArabic && isEnglish) {
        alert("The name must contain only one language (Arabic or English).");
        return false;
    }

    if (nameType === 'first-name') {
        const lastNameInput = document.getElementById('last-name');
        const lastNameValue = lastNameInput.value;
        if (isEnglish && /[\u0600-\u06FF]/.test(lastNameValue)) {
            alert("The last name must be in English like the first name.");
            return false;
        }
        if (isArabic && /[A-Za-z]/.test(lastNameValue)) {
            alert("The last name must be in Arabic like the first name.");
            return false;
        }
    }
    return true;
}

function validateUsername() {
  const username = document.getElementById("username").value;
  if (username.length < 6 || username.length > 20) {
      alert("Username must be between 6 and 20 characters.");
      return false;
  }
  if (username.includes(" ")) {
      alert("Username must not contain spaces.");
      return false;
  }
  if (/[A-Z]/.test(username)) {
      alert("Username must contain only lowercase letters.");
      return false;
  }

  const hasArabic = /[\u0600-\u06FF]/.test(username);
  const hasEnglish = /[a-z]/.test(username);

  if (hasArabic && hasEnglish) {
      alert("The username must contain only one language (Arabic or English).");
      return false;
  }

  const symbolsCount = (username.match(/[._]/g) || []).length;
  const invalidSymbolsCount = (username.match(/[^a-z0-9._\u0600-\u06FF]/g) || []).length;

  if (invalidSymbolsCount > 0) {
      alert("Username can only contain lowercase letters, numbers, and the symbols ( _ ) and ( . ).");
      return false;
  }
  if (symbolsCount > 2) {
      alert("Username can contains a maximum of two symbols ( _ ) or ( . ).");
      return false;
  }
  const numbersCount = (username.match(/\d/g) || []).length;
  if (numbersCount > 2) {
      alert("Username can contains a maximum of two numbers.");
      return false;
  }
  const totalSpecialsAndNumbers = symbolsCount + numbersCount;
  if (totalSpecialsAndNumbers > 4) {
      alert("Username can contains up to 4 numbers with symbols.");
      return false;
  }
  if (/[^a-zA-Z0-9\s]{2,}/.test(username)) {
      alert("The username should not contain repeated symbols next to each other.");
      return false;
  }
  return true;
}


function validatePassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password.length < 7 || password.length > 16) {
      alert("Password must be between 7 and 16 characters long."); 
      return false;
  }

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_-]/.test(password);
  const hasArabic = /[\u0600-\u06FF]/.test(password);
  const hasSpace = /\s/.test(password);

  if (!((hasLetter && hasNumber && hasSpecialChar) || (hasArabic && hasNumber && hasSpecialChar))) {
      alert("Your password must contain at least one letter, one number, and one special character.");
      return false;
  }

  const isEnglish = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_\s]*$/.test(password);
  const isArabic = /^[\u0600-\u06FF0-9!@#$%^&*(),.?":{}|<>_\s]*$/.test(password);

  if (!(isEnglish || isArabic)) {
      alert("The password can contain Arabic or English characters, but not both.");
      return false; 
  }

  if (password !== confirmPassword) {
      alert("Passwords do not match."); 
      return false;
  }

  return true; 
}
function validatePhoneNumber(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}
function validateAge() {
  const birthdayInput = document.getElementById('birthday').value;
  if (!birthdayInput) return false;

  const birthday = new Date(birthdayInput);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }
  return age >= 18 && age <= 90; 
}
function submitForm(event)
{
    event.preventDefault();

    if (!validateName(document.getElementById('first-name'), 'first-name'))
    {
        return false;
    }
    if (!validateName(document.getElementById('last-name'), 'last-name'))
    {
        return false;
    }

    if (!validateUsername())
    {
        return false;
    }

    if (!submitNumberForm())
    {
        return false;
    }
    
    if (!validateAge())
    {
        alert("You must be at least 18 years old and at most 90 years to register.");
        return false;
    }

    if (!validatePassword())
    {
        return false;
    }
    window.location.href ="home.html";
        return true;
}
document.getElementById("signupForm").addEventListener("submit", submitForm);